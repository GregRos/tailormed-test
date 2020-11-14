
export function matrixWithHeaderToObjects(mat: any[][]) {
    const headers = mat[0];
    const objs = [] as any[];
    for (let i = 1; i < mat.length; i++) {
        const obj = {} as any;
        mat[i].forEach((v, i) => {
            obj[headers[i]] = v;
        })
        objs.push(obj);
    }
    return objs;
}
