import { motion } from "framer-motion";

function SquareBox() {
  return (
    <div className="wrapper">
      <div>
        <h1 className="logo">Logo</h1>
      </div>
      <motion.div
        className="square"
        whileHover={{
          scale: 1.01
        }}
        transition={{
          duration: 0.5
        }}
      >
        <div className="allSquares">
          <div className="littleSquare1">
            <div className="list">Work</div>
            <div className="list">Play</div>
            <div className="list">Code</div>
            <div className="list">Game</div>
          </div>

          <div className="profilePicture">
            <img
              src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
              alt="puppy"
            />
          </div>

          {/* npm install avataaars --save */}
          {/* <Avatar
            avatarStyle='Circle'
            topType='ShortHairShortRound'
             accessoriesType='Blank'
             hairColor='BlondeGolden'
             facialHairType='MoustacheFancy'
             facialHairColor='BlondeGolden'
             clotheType='Hoodie'
             clotheColor='PastelOrange'
             eyeType='Happy'
             eyebrowType='Default'
             mouthType='Smile'
             skinColor='Light'
           /> */}

          <div className="littleSquare2">
            <div className="list">HTML</div>
            <div className="list">CSS</div>
            <div className="list">JS</div>
            <div className="list">React</div>
          </div>
        </div>
      </motion.div>
      <h1 className="projectTitle">Projects</h1>

      <div className="container">
        <div className="square1"></div>
        <div className="square2"></div>
        <div className="square3"></div>
      </div>
    </div>
  );
}

export default SquareBox;
