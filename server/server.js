import "dotenv/config";
import {app} from "./src/app";

const PORT = process.env.PORT || 3306;

app.listen({host: '0.0.0.0', port: PORT}, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://0.0.0.0:${PORT}`);
});
