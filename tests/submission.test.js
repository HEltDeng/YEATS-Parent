const test=require('node:test'),assert=require('node:assert/strict');
const{submissionError}=require('../services/submission.js');
test('required image cannot be replaced by text',()=>{assert.match(submissionError('images','文字',[]),/上传图片/);assert.equal(submissionError('images','',[{id:'image'}]),'')});
test('combined requirement needs both image and meaningful text',()=>{assert.match(submissionError('images_text',' ',[{id:'image'}]),/文字/);assert.equal(submissionError('images_text','说明',[{id:'image'}]),'')});
test('text-only rejects pictures even when text exists',()=>{assert.match(submissionError('text','文字',[{id:'image'}]),/移除图片/);assert.equal(submissionError('text','文字',[]),'')});
test('legacy or unspecified policy keeps image-or-text compatibility',()=>{assert.equal(submissionError(undefined,'文字',[]),'');assert.equal(submissionError('image_or_text','',[{id:'image'}]),'');assert.match(submissionError(undefined,'',[]),/文字或上传图片/)});
