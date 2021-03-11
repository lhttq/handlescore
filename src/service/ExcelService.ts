import xlsx from "xlsx";
class ExcelService {
  public listTable: any = [];
  // 处理excel
  public handleExcel(file: File): void {
    const fileReader = new FileReader();
    fileReader.onload = ev => {
      try {
        let data: any = null;
        if (ev !== null) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          data = ev!.target.result;
        }
        const workbook = xlsx.read(data, {
          type: "binary"
        });
        for (const sheet in workbook.Sheets) {
          //循环读取每个文件
          const sheetArray = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
          console.log(sheetArray);
          //若当前sheet没有数据，则continue
          if (sheetArray.length === 0) {
            continue;
          }
          // console.log("读取文件");
          // console.log(sheetArray);
          // for(const item in sheetArray){
          //   console.log(item);
          // }
        }
      } catch (e) {
        console.log(e);
      }
    };
    fileReader.readAsBinaryString(file);
  }
}
export default new ExcelService();
