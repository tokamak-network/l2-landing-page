import { Flex, border } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function RollupAnime() {
  return (
    <Flex
      className="example"
      style={{
        // border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "140px",
        height: "140px",
        border: "1px solid red",
        marginBottom: "30px",
      }}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
      <g data-name="그룹 6543" transform="translate(-480 -1051)">
      
        <g data-name="그룹 6540" transform="translate(-6 -13)">
          <path d="M501 1134h110v1H501z" />
          <g data-name="그룹 6542">
            <g data-name="타원 16" transform="translate(528 1087)" style={{ stroke: '#1c1c1c', fill: 'none' }}>
              <ellipse cx="18" cy="47.5" rx="18" ry="47.5" style={{ stroke: 'none' }} />
              <ellipse cx="18" cy="47.5" rx="17.5" ry="47" style={{ fill: 'none' }} />
            </g>
            <g data-name="타원 17" transform="translate(549 1087)" style={{ strokeDasharray: '4 4', stroke: '#1c1c1c', fill: 'none' }}>
              <ellipse cx="18" cy="47.5" rx="18" ry="47.5" style={{ stroke: 'none' }} />
              <ellipse cx="18" cy="47.5" rx="17.5" ry="47" style={{ fill: 'none' }} />
            </g>
          </g>
          <circle data-name="타원 26" cx="1.5" cy="1.5" r="1.5" transform="translate(500 1133)" />
        </g>
        <g data-name="타원 24" transform="translate(598 1162)" style={{ stroke: '#000', fill: 'none' }}>
          <circle cx="7" cy="7" r="7" style={{ stroke: 'none' }} />
          <circle cx="7" cy="7" r="6.5" style={{ fill: 'none' }} />
        </g>
        <circle data-name="타원 25" cx="3" cy="3" r="3" transform="translate(492 1071)" />
      </g>
    </svg>
    </Flex>
  );
}

export default RollupAnime;
