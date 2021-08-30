// すでに選んだお題のインデックスを保存する配列
let used_topics = [];

// 指定した範囲の整数をランダムに返す
// 0は含み，maxは含まない
function getRandomInt(max) {
    // ランダムに生成した整数
    const num = Math.floor(Math.random() * max);

    if (used_topics.length == max) {
        // すでに選んだお題の数が最大値に等しければused_topicsをリセットする
        used_topics = [];
        return getRandomInt(max);
    } else if (used_topics.includes(num)) {
        // 生成した整数がすでに選んだものであればもう一度選びなおす
        return getRandomInt(max);
    } else {
        // 生成した整数がまだ選んでいないものだったらそれを返す
        used_topics.push(num);
        return num;
    }
}

function dice() {
    // textarea の内容を取得
    const textinput = document.getElementById("topics").value;

    // 改行で分割して配列にする
    const topics = textinput.split('\n');

    // ランダムなインデックスを生成
    const index = getRandomInt(topics.length);

    // 生成されたインデックスのお題を表示する
    document.getElementById("topic").textContent = topics[index];
}
