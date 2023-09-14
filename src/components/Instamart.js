import React, { useState } from "react";

const Section = ({ title, description, isVisible, setVisible }) => {
  // MUI accordion
  // MUI collapse accordion
  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: 5,
        marginBottom: 10,
        padding: 8,
      }}
    >
      <h3>{title}</h3>
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log("executed", isVisible);
          setVisible();
        }}
      >
        {!isVisible ? "Show" : "Hide"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setVisible] = useState({
    about: false,
    team: false,
  });
  return (
    <div>
      Instamart
      <Section
        title="About"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis, aliquam sint amet quam provident, qui nobis animi commodi earum repudiandae tempore a veritatis deserunt iste, adipisci consectetur sed reprehenderit error optio officiis. Obcaecati quaerat molestiae, veritatis pariatur, rem quo, facere vitae ducimus beatae praesentium temporibus quasi corporis voluptatem nam magnam. "
        isVisible={isVisible.about}
        setVisible={() =>
          setVisible({
            about: true,
            team: false,
          })
        }
      />
      <Section
        title="Team"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis, aliquam sint amet quam provident, qui nobis animi commodi earum repudiandae tempore a veritatis deserunt iste, adipisci consectetur sed reprehenderit error optio officiis. Obcaecati quaerat molestiae, veritatis pariatur, rem quo, facere vitae ducimus beatae praesentium temporibus quasi corporis voluptatem nam magnam. Officiis porro, quisquam molestiae saepe quibusdam officia aliquid voluptatem vero rerum eligendi corrupti! "
        isVisible={isVisible.team}
        setVisible={() =>
          setVisible({
            about: !isVisible.about,
            team: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;
