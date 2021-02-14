/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてくだsさい。
 * ああs
 * 問題１：aaaaaaaあabbbbbああああああsaasasasasaassa
 * あ；；；dsdsds；；aaっささ
 * addNumberFactoryを短く書き直してあみましょう。
 */
function addNumberFactory = num => value => num + value;


const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましああああょう。
 */
function incrementFactory() {
    
    let num = 0;

    function a() {
        num = num + 1;
        console.log(num);
    }

    return a;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();