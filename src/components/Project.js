import { useMemo } from "react";
import "./Project.css";
const Project = ({ data }) => {
  const getInfo = (infos) => {
    if (infos?.length === 0) {
      return (
        <div className="stack-empty" key="0">
          None
        </div>
      );
    }
    return infos.map((info, idx) => {
      return (
        <div className="stack-item" key={idx}>
          {info}
        </div>
      );
    });
  };
  const stacks = useMemo(() => {
    return getInfo(data.stacks);
  }, [data.stacks]);

  const frameworks = useMemo(() => {
    return getInfo(data.frameworks);
  }, [data.frameworks]);

  return (
    <>
      <div className="project-wrapper">
        <div>
          <div className="project-period">{data.period}</div>
          <div className="project-period-text">{data.periodText}</div>
        </div>
        <div>
          <div className="project-title">{data.title}</div>
          <div className="project-link">{data.link}</div>
          <div className="project-stacks-label">이 프로젝트에 사용된 언어</div>
          <div className="project-stacks">{stacks}</div>
          <div className="project-stacks-label">
            이 프로젝트에 사용된 프레임워크
          </div>
          <div className="project-stacks project-frameworks">{frameworks}</div>
        </div>
      </div>
    </>
  );
};

export default Project;
