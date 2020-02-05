const path = require('path');
const fs = require('fs');

const baseDir = '.';
const baseDeep = 3;

// 开始对指定 path 递归查找深度为 deep 深度
const getIndexOfPathByDeep = (obj, dir, curDir, deep) => {
    let curPath = path.join(dir, curDir);
    // 达到搜索深度，停止
    if(deep) {
        // 除去 隐藏目录/文件
        if(/^\.\w+/.test(curDir)) {
            return;
        }
        obj[curDir] = curDir;
        if(fs.statSync(curPath).isDirectory()) {
            obj[curDir] = {};
            let lists = fs.readdirSync(curPath);
            lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1))
        }
    }
}

const drawDir = (json) => {
    // 渲染根目录
    let master_md = fs.readFileSync('README.md', 'utf8');
    let str = '目录 \n\n';
    Object.keys(json).forEach(d => {
        if(typeof json[d] === 'object') {
            str += `* [${d}](./${d}) \n\n`
        }
    });
    master_md = master_md.split('目录')[0] + str;
    master_md += `**⚠️声明:** 本仓库不做商用，无利益纠纷。`;
    fs.writeFileSync('README.md', master_md, 'UTF-8');

    // 渲染子目录
    Object.keys(json).forEach(d => {
        if(typeof json[d] === 'object') {
            let child_str = `# ${d} \n\n`;
            Object.keys(json[d]).forEach(d_1 => {
                if(typeof json[d][d_1] === 'object') {
                    child_str += `## ${d_1} \n\n`;
                    Object.keys(json[d][d_1]).forEach(d_2 => {
                        if(d_2 === 'README.md') {
                            return;
                        }
                        child_str += `* [${d_2.split('.')[0]}](./${d_1}/${d_2}) \n\n`;
                    })
                }
            })
            fs.writeFileSync(`./${d}/README.md`, child_str, 'UTF-8');
        }
    });
}

// 获取指定路径 path 下的，默认深度为 3 的目录 JSON
((dir, deep) => {
    let dirDevide = dir.split('/');
    let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
    let list = {};
    getIndexOfPathByDeep(list, path.join(__dirname, preDir), dirDevide[0], deep + 1);

    drawDir(list[baseDir])
})(baseDir, baseDeep)


