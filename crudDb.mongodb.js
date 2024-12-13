// use("crudDB");
// db.createCollection("courses");
// db.courses.insertMany([
//     { "name": "John", "class": 7, "grade": "A", "fee": 0 },
//     { "name": "Sarah", "class": 8, "grade": "B", "fee": 100 },
//     { "name": "Michael", "class": 9, "grade": "A", "fee": 200 },
//     { "name": "Emily", "class": 10, "grade": "A+", "fee": 300 },
//     { "name": "David", "class": 7, "grade": "C", "fee": 50 },
//     { "name": "Sophia", "class": 8, "grade": "B+", "fee": 150 },
//     { "name": "Daniel", "class": 9, "grade": "A-", "fee": 250 },
//     { "name": "Olivia", "class": 10, "grade": "A", "fee": 350 },
//     { "name": "Matthew", "class": 7, "grade": "B", "fee": 0 },
//     { "name": "Isabella", "class": 8, "grade": "A+", "fee": 100 },
//     { "name": "James", "class": 9, "grade": "C", "fee": 0 }
// ]);
// let a = db.courses.find();
// // console.log(a);



// let b = db.courses.find({}, { name: 1, class: 1, _id: 0 });
// // console.log(b);

// let c = db.courses.find({ fee: 0 });
// // console.log(c);

// let d = db.courses.find({ class: 8 });
// // console.log(d);

// let e = db.courses.find({ grade: { $in: ["A+", "B+"] } });
// // console.log(e);

// let f = db.courses.find({ fee: { $gt: 100 } });
// // console.log(f);

// let g = db.courses.find({ fee: { $gte: 50, $lte: 200 } });
// // console.log(g);

// let h = db.courses.find({ name: { $regex: /^J/ } });
// // console.log(h);

// let i = db.courses.updateMany({ class: 7 }, { $set: { fee: 50 } });
// // console.log(i);

// let j = db.courses.updateMany({}, { $inc: { fee: 10 } });
// console.log(j);










