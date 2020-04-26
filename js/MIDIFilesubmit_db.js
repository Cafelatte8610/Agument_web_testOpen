var DataBase = firebase.database();
var storage = firebase.storage();
var storageRef = storage.ref();
// var user = firebase.auth().currentUser;

function MIDISubmit(){
    var title = document.getElementById("title").value;
    var comment  = document.getElementById("comment").value;
    var file = document.getElementById("filepath").files[0];
    
    if(file.type != "audio/mid"){
        alert("データを読み込めません！入力を確認してください！");
        return;
    }
    var DataKey = firebase.database().ref().child('Music').push().key;
    console.log(DataKey);
    var MusicData = {
        Title:title,
        Comment:comment,
        PlayCount:0,
        ID: DataKey
    };
    var updates = {};
    updates['/Music/' + DataKey] = MusicData;
    DataBase.ref().update(updates,function(error){
        if(error){
            alert("DataBaseError");
        }
        else{
            var metadata = {   
                contentType: 'audio/mid',
                name: title,
                customMetadata: {
                    'name': title,
                    'comment': comment
                }
            };
            var uploadTask = storageRef.child('MIDI/'+DataKey+".mid").put(file, metadata);
            alert("投稿完了");
        }
    });
    // DataBase.ref().set(sets,function(error){
    //     if(error){
    //         alert("DataBaseError");
    //     }
    //     else{
    //         var metadata = {   
    //             contentType: 'audio/mid',
    //             name: title,
    //             customMetadata: {
    //                 'name': title,
    //                 'comment': comment
    //             }
    //         };
    //         var uploadTask = storageRef.child('MIDI/'+DataKey+".mid").put(file, metadata);
    //         alert("投稿完了");
    //     }
    // });
    
    
    
    
    
    // DataBase.collection("Music").add({
    //     Title:title,
    //     Comment:comment,
    //     PlayCount:0,
    //     ID:" "
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //     thisID=docRef.id;
    //     console.log(thisID);
    //     DataBase.collection("Music").doc(thisID).set({
    //         Title:title,
    //         Comment:comment,
    //         PlayCount:0,
    //         ID:thisID
    //     }).then(() => {
    //         var metadata = {   
    //             contentType: 'audio/mid',
    //             name: title,
    //             customMetadata: {
    //                 'name': title,
    //                 'comment': comment
    //             }
    //         };
    //         var uploadTask = storageRef.child('MIDI/'+thisID+".mid").put(file, metadata);
    //         // succsesmessage
    //     }).catch(error => {
    //         alert("IDエラー");
    //     })
    // })
    // .catch(function(error) {
    //     console.log("Error adding document: ", error);
    // });
}