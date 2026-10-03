export function submissionError(requirement:string|undefined,text:string,images:any[]):string{
 const words=!!text.trim(),pictures=images.length>0;
 if(requirement==='text'){if(pictures)return '本次作业仅接收文字，请移除图片';if(!words)return '本次作业要求填写文字说明';}
 if((requirement==='images'||requirement==='images_text')&&!pictures)return '本次作业要求上传图片';
 if(requirement==='images_text'&&!words)return '本次作业要求填写文字说明';
 if(!words&&!pictures)return '请填写文字或上传图片';
 return '';
}
