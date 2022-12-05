const SlideBarrel = ({ barrel }) => {
  let context = null;
  if (barrel) {
    context = {
      title: ` BIÈRE AU FÛT`,
      txtOne: "C'EST L'HEURE DE LA BIÈRE",
      txtTwo: "RELACHEZ LA PRESSION",
      type: "barrel",
    };
  } else {
    context = {
      title: `BIÈRE BOUTEILLE`,
      txtOne: "TENTEZ L'AVENTURE",
      txtTwo: "AVEC NOS BIÈRES EN BOUTEILLE",
      type: "bottle",
    };
  }

  const { title, txtOne, txtTwo, type } = context;

  return (
    <div className={"discover-container container-" + type}>
      <div className={"discover-picture picture-" + type}></div>
      <h2>{title}</h2>
      <p>{txtOne}</p>
      <p>{txtTwo}</p>
    </div>
  );
};

export default SlideBarrel;
