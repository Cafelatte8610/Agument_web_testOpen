var ncmb = new NCMB("ea25a419458420ee0d676cf8a65f2bc887283023a901271b0e02742736d5fb55","3a9acdb12b32dc76cc120c2cc0eb001e18130a6296c9775d80c23f4317bccf50");

function OnclicSubmitSignIN(){
    console.log('ログイン中');
    var email = document.getElementById("mailAddress_in").value;
    var pass  = document.getElementById("password_in").value;
    //　Userインスタンスの生成
    ncmb.User.loginWithMailAddress(email, pass)
    .then(function(data){
        location.href = './MyPage.html';
    })
    .catch(function(err){
        alert("ログインできませんでした。入力情報をもう一度お確かめください。");
    });
    
    // var email = document.getElementById("mailAddress_in").value;
    // var pass  = document.getElementById("password_in").value;
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    // .then(function() {
    //     return firebase.auth().signInWithEmailAndPassword(email, pass)
    //     .then(user => {
    //         location.href = '../MyPage.html';
    //     }, error => {
    //         alert("ログインできませんでした。入力情報をもう一度お確かめください。");
    //     });
    // })
    // .catch(function(error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     alert("ログインできませんでした。入力情報をもう一度お確かめください。");
    // });   
}

var re_email;

function OnclicSubmitSignUP(){
//     var userName=document.getElementById("username_up").value;
    var email = document.getElementById("mailAddress_up").value;
//     var pass  = document.getElementById("password_up").value;

    
    ncmb.User.requestSignUpEmail(email)
    .then(function(data){
        re_email=email;
        location.href = './AdMeilSend.html';
    })
    .catch(function(err){
        alert("アカウントを作成できませんでした。");
    });
    
    // console.log('アカウント作成中');
    // var email = document.getElementById("mailAddress_up").value;
    // var pass  = document.getElementById("password_up").value;
    // firebase.auth().createUserWithEmailAndPassword(email, pass).then(function() {
    //     alert('アカウント作成成功');
    //     // Mypageへ飛ぶ
    //     location.href = '../MyPage.html';
    // }).catch(function(error) {
    //     alert('アカウント作成失敗');
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    // });
}


function AdReSend(){
    ncmb.User.requestSignUpEmail(re_email)
    .then(function(data){
    })
    .catch(function(err){
        alert("メールアドレスに不備があります。");
    });
}
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
// .then(function() {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return firebase.auth().signInWithEmailAndPassword(email, password);
// })
// .catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
// });
