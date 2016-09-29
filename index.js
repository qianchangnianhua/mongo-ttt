var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongo-ttt')

var db = mongoose.connection;


db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password: String,
    age: String
  })

  var User = mongoose.model('user', userSchema);

  User.findById({_id: '57eccf935ad70f9696be912c'},function(err,user){
  user.remove(function(err){
   console.log('删除了！');
   User.find().exec(function(err, users) {
     // 异步执行
     console.log(users);
   });
 });
});

console.log("我先出来了");

});


//   User.findById({_id: '57ecbc273b2d4a25ed486806'}, function(err,user) {
//     user.name = 'rrrrrr'
//     user.save(function(err){
//
//       console.log('更新了！')
//       User.find().exec(function(err, users) {
//         // 异步执行
//         console.log(users);
//       });
//     });
//   });


// cat 是实际数据库中记录的名字
// var peter = new user({ name: 'pppeter', password: '111', age: '33' });
// // 成功构建一条数据记录
// peter.save()
  // var cat = mongoose.model('cat', catSchema);
  // //ppp 是实际数据库中 一条记录的名字
  // var kitty = new cat({ name: 'Hellokitty' ,age:12,password:'wang'});
  // //peter是一条记录
  // console.log(kitty.name,kitty.age,kitty.password);
  // //成功够建议一条数据记录
  // kitty.save()
  // //保存操作
