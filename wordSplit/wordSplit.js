const backtrack = (s, length, wordSet, index, map) => {
    if (map.has(index)) {
        return map.get(index);
    }
    const wordBreaks = [];
    if (index === length) {
        wordBreaks.push([]);
    }
    for (let i = index + 1; i <= length; i++) {
        const word = s.substring(index, i);
        if (wordSet.has(word)) {
            const nextWordBreaks = backtrack(s, length, wordSet, i, map);
            for (const nextWordBreak of nextWordBreaks) {
                const wordBreak = [word, ...nextWordBreak]
                wordBreaks.push(wordBreak);
            }
        }
    }
    map.set(index, wordBreaks);
    return wordBreaks;
}
var wordBreak = function(s, wordDict) {
    const map = new Map();
    const wordBreaks = backtrack(s, s.length, new Set(wordDict), 0, map);
    const breakList = [];
    for (const wordBreak of wordBreaks) {
        breakList.push(wordBreak.join(' '));
    }
    console.log(breakList);
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/word-break-ii/solution/dan-ci-chai-fen-ii-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let s = "catsanddog",
wordDict = ["cat", "cats", "and", "sand", "dog"];
wordBreak(s, wordDict);