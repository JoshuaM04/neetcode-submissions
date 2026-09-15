class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False;

        arrS = sorted(list(s))
        arrT = sorted(list(t))


        for i in range(len(arrT)):
            if arrS[i] != arrT[i]:
                return False

        return True;
        