class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let map = new Map();
        let res = [];
        
        for (const [x1, y1] of points) {
            map.set([x1, y1], Math.sqrt(Math.pow((x1 - 0), 2) + Math.pow((y1 - 0), 2)));
        }

        console.log(map);

        while(k) {
            let min = Math.min(...map.values());
            let key = [...map].find(([k, v]) => v === min)?.[0];
            
            res.push(key);
            map.delete(key);

            console.log(key, min);
            k--;
        }

        return res;
    }
}
