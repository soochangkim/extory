import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Project from "./components/Project";

const App = () => {
  const [height, setHeight] = useState(0);
  const ulRef = useRef(null);
  const data = useMemo(
    () => [
      {
        period: "2018.09.21 ~ 2020.06.25",
        periodText: "2년 3개월",
        title: "프로젝트 제목 Project Title",
        link: "eazymation-dev/dev2job-fe-i18n",
        stacks: [
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
        ],
        frameworks: ["IT consulting"],
      },
      {
        period: "2018.09.21 ~ 2020.06.25",
        periodText: "2년 3개월",
        title: "프로젝트 제목 Project Title",
        link: "eazymation-dev/dev2job-fe-i18n",
        stacks: [
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
        ],
        frameworks: ["IT consulting"],
      },
      {
        period: "2018.09.21 ~ 2020.06.25",
        periodText: "2년 3개월",
        title: "프로젝트 제목 Project Title",
        link: "eazymation-dev/dev2job-fe-i18n",
        stacks: [
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
          "IT consulting",
        ],
        frameworks: [],
      },
    ],
    []
  );

  const projects = useMemo(() => {
    return data.map((project, idx) => {
      return (
        <li key={idx}>
          <Project data={project} />
        </li>
      );
    });
  }, [data]);

  useEffect(() => {
    if (!ulRef) return;
    const lastIndex = ulRef.current?.children.length - 1;
    const lastHeight =
      ulRef?.current.children[lastIndex].getBoundingClientRect().height;
    const height = ulRef.current.getBoundingClientRect().height - lastHeight;
    setHeight(height);
  }, [projects]);
  return (
    <div className="wrapper">
      <div className="title">
        <div>프로젝트 이력</div>
        <div className="summary">
          <div>Total project: 24</div>
          <div>Total period: 5years, 0months</div>
        </div>
      </div>
      <div className="history">
        <div className="filter">
          <input type="checkbox" className="filter-checkbox"></input>
          <div className="filter-label">Verified only</div>
        </div>
        {data?.length > 0 && (
          <ul style={{ "--height": height + "px" }} ref={ulRef}>
            {projects}
          </ul>
        )}
      </div>
      <div className="more-wrapper">
        <div className="more">
          <span>View more projects</span> <i class="arrow down"></i>
        </div>
      </div>
    </div>
  );
};

export default App;
