import React, { useState } from "react";
import ProjectsModification from "../../components/ProjectsModification";
const list = [
   {
      id: 123,
      img: "https://www.ulsanfocus.com/wp-content/uploads/2021/05/Butter-of-BTS-s-Song-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EB%8A%94-%EB%AA%A8%EB%93%A0.jpg",
      title: "이것은 제목",
      summary: "이것은 요약입니다.",
      detail: "이것은 상세내용입니다.",
      github: "https://github.com/Seongil-Shin",
   },
   {
      id: 12,
      img: "https://www.ulsanfocus.com/wp-content/uploads/2021/05/Butter-of-BTS-s-Song-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EB%8A%94-%EB%AA%A8%EB%93%A0.jpg",
      title: "이것은 제목",
      summary: "이것은 요약입니다.",
      detail: "이것은 상세내용입니다.",
      github: "https://github.com/Seongil-Shin",
   },
   {
      id: 23,
      img: "https://www.ulsanfocus.com/wp-content/uploads/2021/05/Butter-of-BTS-s-Song-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EB%8A%94-%EB%AA%A8%EB%93%A0.jpg",
      title: "이것은 제목",
      summary: "이것은 요약입니다.",
      detail: "이것은 상세내용입니다.",
      github: "https://github.com/Seongil-Shin",
   },
   {
      id: 1,
      img: "https://www.ulsanfocus.com/wp-content/uploads/2021/05/Butter-of-BTS-s-Song-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EB%8A%94-%EB%AA%A8%EB%93%A0.jpg",
      title: "이것은 제목",
      summary: "이것은 요약입니다.",
      detail: "이것은 상세내용입니다.",
      github: "https://github.com/Seongil-Shin",
   },
   {
      id: 2,
      img: "https://www.ulsanfocus.com/wp-content/uploads/2021/05/Butter-of-BTS-s-Song-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EB%8A%94-%EB%AA%A8%EB%93%A0.jpg",
      title: "이것은 제목",
      summary: "이것은 요약입니다.",
      detail: "이것은 상세내용입니다.",
      github: "https://github.com/Seongil-Shin",
   },
   {
      id: 3,
      img: "https://www.ulsanfocus.com/wp-content/uploads/2021/05/Butter-of-BTS-s-Song-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EB%8A%94-%EB%AA%A8%EB%93%A0.jpg",
      title: "이것은 제목",
      summary: "이것은 요약입니다.",
      detail: "이것은 상세내용입니다.",
      github: "https://github.com/Seongil-Shin",
   },
];
function ProjectsModContainer() {
   const [onMod, setOnMod] = useState(false);
   const [data, setData] = useState({});

   const onChangeData = () => {};
   const mutate = (isAdd) => {};

   return (
      <ProjectsModification
         list={list}
         setOnMod={setOnMod}
         onMod={onMod}
         onChangeData={onChangeData}
         data={data}
         mutate={mutate}
      />
   );
}
export default ProjectsModContainer;
