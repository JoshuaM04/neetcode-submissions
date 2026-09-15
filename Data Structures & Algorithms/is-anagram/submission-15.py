class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mapS = {}
        mapT = {}

        for i in range(len(s)):
            if s[i] in mapS:
                freq = mapS.get(s[i])
                mapS[s[i]] = freq + 1
            else:
                mapS[s[i]] = 1
        
        for i in range(len(t)):
            if t[i] in mapT:
                freq = mapT.get(t[i])
                mapT[t[i]] = freq + 1
            else:
                mapT[t[i]] = 1
        
        return mapS == mapT

        