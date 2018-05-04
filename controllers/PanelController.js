// function getPanelModel() {
//     Class Grade{ String gradeName; List<Subjects> subjectList;}
//     Class Subject{ String subjectName; List<String> topicList;}
//
//     List<Grade> gradeList=new ArrayList();
//     distinctGrades=/*select distinct grade from quesBank*/;
//     For(String g: distinctGrades){
//         distinctSubjects= /*select distinct subject from quesBank where grade=g*/;
//         List<Subject> subjectList=new ArrayList();
//         for(String s: distinctSubject){
//             distinctTopics=/*select distinct topic from quesBank where grade=g and subject=s*/;
//             Subject sObj= new Subject(s,disctinctTopics);
//             subjectList.add(sObj);
//         }
//         Grade gObj=new Grade(g, subjectList);
//         gradeList.add(gObj);
//     }
//     return gradeList;
// }