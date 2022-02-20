import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/t_nodejs", {
  //뒤에 데이터베이스이름으로 사용할 t_nodejs로 해줘야함. 딴걸로 해도 상관없음
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError); //계속발생하는 이벤트
db.once("open", handleOpen); //한번만 발생하는 이벤트