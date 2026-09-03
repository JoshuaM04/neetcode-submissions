class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        const visit = new Set();
        let x = 0,
            y = 0;
        visit.add(`${x},${y}`);

        for (const c of path) {
            if (c === 'N') y++;
            else if (c === 'S') y--;
            else if (c === 'E') x++;
            else if (c === 'W') x--;

            const pos = `${x},${y}`;
            if (visit.has(pos)) return true;
            visit.add(pos);
        }

        return false;
    }
}