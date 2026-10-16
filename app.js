(()=>{'use strict';
const $=id=>document.getElementById(id), saved=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
let lang=saved('pa2-lang','ru'),grade=Number(new URLSearchParams(location.search).get('grade'))||6,lesson=0,score=saved('pa2-score',0);
if(grade<6||grade>11)grade=6;
if(!UI[lang])lang='ru';const completed=new Set(saved('pa2-completed',[])),checks=new Set(saved('pa2-checks',[]));
// Restore points for every correctly solved question after the previous per-lesson cap.
if(saved('pa2-practice-cap-v1',false)&&!saved('pa2-per-question-v2',false)){
 const lessonIds=new Set([...checks].map(id=>id.substring(0,id.lastIndexOf('-'))));
 score=(Number(saved('pa2-score',0))||0)+Math.max(0,checks.size-lessonIds.size)*10;
 localStorage.setItem('pa2-score',JSON.stringify(score));
 localStorage.setItem('pa2-per-question-v2',JSON.stringify(true));
}
// One-time conversion of previously awarded question points from 10 to 2.
if(!saved('pa2-question-2-v1',false)){
 const extra=saved('pa2-practice-checks',[]);
 const reduction=(checks.size+extra.length)*8;
 score=Math.max(0,(Number(saved('pa2-score',0))||0)-reduction);
 localStorage.setItem('pa2-score',JSON.stringify(score));
 localStorage.setItem('pa2-question-2-v1',JSON.stringify(true));
}
document.addEventListener('pa-points-updated',()=>stat());const ui=()=>UI[lang],group=()=>COURSE_DATA.find(x=>x.grade===grade),item=()=>group().lessons[lesson],key=()=>`${grade}-${lesson}`,local=o=>typeof o==='string'?o:(o?.[lang]??o?.ru??'');
const practiceLessonCount=()=>new Set([...checks].map(id=>id.substring(0,id.lastIndexOf('-')))).size;
const save=()=>{localStorage.setItem('pa2-completed',JSON.stringify([...completed]));localStorage.setItem('pa2-checks',JSON.stringify([...checks]));localStorage.setItem('pa2-score',JSON.stringify(score));};
const norm=s=>String(s).trim().toLowerCase().replace(/[“”"`]/g,"'").replace(/\s+/g,'').replace(/;$/,'');
function make(tag,content,cls){const e=document.createElement(tag);if(content!==undefined)e.textContent=content;if(cls)e.className=cls;return e;}
function button(text,fn,cls){const b=make('button',text,cls);b.type='button';b.onclick=fn;return b;}
function stat(){ score=Number(saved('pa2-score',score))||0;const extra=saved('pa2-practice-checks',[]); $('practiceSolvedCount').textContent=extra.length; $('practicePoints').textContent=extra.length*2; $('completedCount').textContent=completed.size;$('score').textContent=score; $('solvedCount').textContent=checks.size; $('earnedLessonPoints').textContent=completed.size*10; }
function updateLessonResult(newlyCompleted=false){
 const correct=item().tasks.filter((t,i)=>t.type!=='reflection'&&checks.has(`${key()}-${i}`)).length;
 const earned=Math.min(10,correct*2);
 const label={kk:'Сабақ ұпайы',ru:'Баллы за урок',en:'Lesson points'}[lang];
 const done={kk:'Сабақ аяқталды!',ru:'Урок завершён!',en:'Lesson completed!'}[lang];
 $('lessonResult').textContent=`${newlyCompleted||completed.has(key())?done+' ':''}${label}: ${earned}/10`;
}
function taskView(t,i){const card=make('div',null,'task'),question=local(t.q)||t.question||'',title=make('strong',`${i+1}. ${question}`),feedback=make('div',null,'feedback');card.append(title);
const answer=()=>{feedback.className='feedback';feedback.textContent=ui().answer+' '+(t.type==='choice'?local(t.options)[t.correct]:t.type==='order'?local(t.items).join(' → '):t.type==='reflection'?local(t.sample):t.answer)};
const mark=ok=>{feedback.className='feedback '+(ok?'good':'bad');feedback.textContent=ok?ui().correct:ui().incorrect;const id=`${key()}-${i}`;if(ok&&!checks.has(id)){checks.add(id);score=Number(saved('pa2-score',0))||0;score+=2;save();stat();updateLessonResult();}};
if(t.type==='choice'){const options=make('div',null,'choice'),name=`q-${grade}-${lesson}-${i}`;local(t.options).forEach((opt,j)=>{const label=make('label'),radio=make('input');radio.type='radio';radio.name=name;radio.value=j;label.append(radio,document.createTextNode(opt));options.append(label)});card.append(options,button(ui().check,()=>{const v=options.querySelector('input:checked');mark(!!v&&Number(v.value)===t.correct)}));}
else if(t.type==='order'){const items=local(t.items),selected=[];const row=make('div',null,'sequence'),picked=make('div',null,'feedback');const show=()=>{picked.textContent=selected.map(j=>items[j]).join(' → ');row.replaceChildren();items.forEach((txt,j)=>{const b=button(txt,()=>{if(!selected.includes(j)){selected.push(j);show()}});b.disabled=selected.includes(j);row.append(b)})};show();card.append(make('p',ui().order),row,picked,button(ui().reset,()=>{selected.length=0;show()}),button(ui().check,()=>mark(JSON.stringify(selected)===JSON.stringify(t.correct))));}
else{const input=t.type==='reflection'?make('textarea'):make('input');input.placeholder=t.type==='reflection'?ui().openAnswer:ui().answer;card.append(input);if(t.type==='reflection')card.append(button(ui().show,()=>{feedback.className='feedback';feedback.textContent=ui().reflection+'\n'+local(t.sample)}));else card.append(button(ui().check,()=>mark([t.answer,...(t.acceptedAnswers||[])].some(a=>norm(input.value)===norm(a)))));}
if(t.type!=='reflection')card.append(button(ui().show,answer));card.append(feedback);return card;}
function render(){const u=ui(),lessonData=item();document.documentElement.lang=lang;document.title=u.brand;document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang);b.setAttribute('aria-pressed',String(b.dataset.lang===lang))});
const bindings={brand:'brand',navCourses:'courses',navLesson:'lesson',navCert:'certificate',eyebrow:'eyebrow',heroTitle:'hero',intro:'intro',start:'start',lessonsLabel:'lessons',tasksLabel:'tasks',completedLabel:'completed',pointsLabel:'points',choose:'choose',sub:'sub',theoryLabel:'theory',codeLabel:'code',practiceLabel:'practice',copyCode:'copy',complete:'complete',next:'next',certTitle:'certTitle',certIntro:'certIntro',downloadCert:'download',awarded:'awarded',certFor:'for'};
Object.entries(bindings).forEach(([id,k])=>$(id).textContent=u[k]);$('practiceSolvedLabel').textContent=({ru:'Практика: выполнено заданий',kk:'Тәжірибе: орындалған тапсырмалар',en:'Practice tasks completed'})[lang];$('practicePointsLabel').textContent=({ru:'Баллы за практику',kk:'Тәжірибе ұпайлары',en:'Practice points'})[lang];$('solvedLabel').textContent=({ru:'Выполнено заданий',kk:'Орындалған тапсырмалар',en:'Tasks completed'})[lang];$('lessonPointsLabel').textContent=({ru:'Баллы за уроки',kk:'Сабақтар үшін ұпай',en:'Lesson points'})[lang];$('studentName').placeholder=u.name;$('certLabel').textContent=u.certificate.toUpperCase();$('footer').textContent='© '+u.brand+' · 2026';$('totalLessons').textContent=COURSE_DATA.reduce((s,g)=>s+g.lessons.length,0);$('totalTasks').textContent=COURSE_DATA.reduce((s,g)=>s+g.lessons.reduce((a,l)=>a+l.tasks.length,0),0);$('grades').replaceChildren();
COURSE_DATA.forEach(c=>{const b=button(`${c.grade} ${u.grade}`,()=>{grade=c.grade;lesson=0;render()},'grade'+(grade===c.grade?' active':''));$('grades').append(b)});
$('gradeHeading').textContent=`${grade} ${u.grade}`;$('gradeDescription').textContent=u.sub;const done=group().lessons.filter((_,i)=>completed.has(`${grade}-${i}`)).length;$('gradeProgress').style.width=`${100*done/group().lessons.length}%`;$('gradeProgressText').textContent=`${u.done}: ${done} ${u.of} ${group().lessons.length}`;
$('lessonList').replaceChildren();group().lessons.forEach((x,i)=>$('lessonList').append(button(`${i===0?'0':i}. ${local(x.i18n)[ 'title' ]||x.title}`,()=>{lesson=i;render()},'lesson-button'+(lesson===i?' active':'')+(completed.has(`${grade}-${i}`)?' done':''))));
$('lessonTag').textContent=`${grade} ${u.grade} · ${u.lesson} ${lesson} / ${group().lessons.length-1}`;$('lessonTitle').textContent=lessonData.i18n?.[lang]?.title||lessonData.title;
const lecture=$('theory');lecture.replaceChildren();if(lesson===0){ZERO_LECTURE[lang].forEach((p,i)=>lecture.append(make('p',p,i===0?'note':'')))}else{const bits=LECTURES[lang];const intro=lang==='ru'?`Тема: ${lessonData.title}. ${lessonData.theory}`:lang==='kk'?`Тақырып: ${lessonData.i18n.kk.title}. Бұл сабақта осы ұғымның негізгі мақсатын, қолданылуын және Python бағдарламасындағы жұмысын үйренесің.`:`Topic: ${lessonData.i18n.en.title}. In this lesson you will learn the purpose of this concept, when to use it, and how it works in a Python program.`;lecture.append(make('p',intro,'note'));Object.values(bits).forEach(t=>lecture.append(make('p',t)))}
$('code').textContent=lessonData.code;$('codeExplain').textContent=lesson===0?local({ru:'Вывод: Hello, Python! и 5.',kk:'Нәтиже: Hello, Python! және 5.',en:'Output: Hello, Python! and 5.'}):lang==='ru'?lessonData.explain:lang==='kk'?'Кодты іске қосып, нәтижесін тексер. Айнымалыларды өзгертіп, айырмашылығын түсіндір.':'Run the code and check its output. Change the variables and explain the difference.';
$('tasks').replaceChildren();lessonData.tasks.forEach((t,i)=>$('tasks').append(taskView(t,i)));$('lessonStatus').textContent=completed.has(key())?u.lessonDone:'';$('certName').textContent=$('studentName').value.trim()||u.student;$('certGrade').textContent=`${grade} ${u.grade} · Python`;stat();updateLessonResult();}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('pa2-lang',JSON.stringify(lang));render()});
$('complete').onclick=()=>{const fresh=!completed.has(key());if(fresh){completed.add(key());}save();render();updateLessonResult(fresh);};$('next').onclick=()=>{if(lesson<group().lessons.length-1)lesson++;else if(grade<11){grade++;lesson=0}else return;render();$('lesson').scrollIntoView({behavior:'smooth'})};
$('copyCode').onclick=async()=>{try{await navigator.clipboard.writeText(item().code);$('copyCode').textContent='✓';setTimeout(()=>{$('copyCode').textContent=ui().copy},1200)}catch{const sel=window.getSelection(),range=document.createRange();range.selectNodeContents($('code'));sel.removeAllRanges();sel.addRange(range)}};
$('studentName').oninput=()=>{$('certName').textContent=$('studentName').value.trim()||ui().student};
$('downloadCert').onclick=()=>{if(!group().lessons.every((_,i)=>completed.has(`${grade}-${i}`))){$('certStatus').textContent=ui().finishFirst;return}const name=$('studentName').value.trim();if(!name){$('certStatus').textContent=ui().enterName;return}const safe=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const html=`<!doctype html><html lang="${lang}"><meta charset="utf-8"><title>${safe(ui().certificate)}</title><style>body{font-family:Georgia,serif;text-align:center;padding:75px 30px;border:14px double #c5a85e;color:#1b3152}h1{font-size:45px}h2{font-size:36px;color:#2057a5}p{font-size:20px}</style><p>🐍 PYTHON ACADEMY</p><h1>${safe(ui().certificate.toUpperCase())}</h1><p>${safe(ui().awarded)}</p><h2>${safe(name)}</h2><p>${safe(ui().for)} · ${grade} ${safe(ui().grade)} · Python</p><p>${new Date().toLocaleDateString(lang)}</p></html>`;const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=`python-certificate-${grade}.html`;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);$('certStatus').textContent=ui().saved};
render();})();
