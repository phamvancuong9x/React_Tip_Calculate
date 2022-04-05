const MenuItem = ({ href, text, submenu }) => {
  return (
    <li className="menu-item">
      <a href={href}>{text}</a>
      {submenu ? <SubMenu menu={submenu} /> : null}
    </li>
  );
};

const SubMenu = ({ menu }) => {
  return (
    <ul className="submenu">
      {menu.map(function (value, index) {
        return (
          <li key={index} className={value.className}>
            {value.text}
          </li>
        );
      })}
    </ul>
  );
};

const arrayMenu = [
  {
    className: "nav__center-item typeProduct",
    text: "Khuyến Mãi",
    href: "/court",
    submenu: [
      {
        className: "nav__center-item typeProduct",
        text: "Sản Phẩm",
        href: "/court",
      },
      {
        className: "nav__center-item typeProduct",
        text: "Thiết Kế Riêng",
        href: "/court",
      },
    ],
  },
  {
    className: "nav__center-item typeProduct",
    text: "Sản Phẩm",
    href: "/court",
  },
  {
    className: "nav__center-item typeProduct",
    text: "Thiết Kế Riêng",
    href: "/court",
  },
  {
    className: "nav__center-item typeProduct",
    text: "Tin Tức",
    href: "/court",
  },
  {
    className: "nav__center-item typeProduct",
    text: "Cửa Hàng",
    href: "/court",
  },
];
const Menu = ({ arrayMenu }) => {
  return (
    <ul className="menu">
      {arrayMenu.map(function (value, index) {
        return (
          <MenuItem
            key={index}
            className={value.className}
            text={value.text}
            submenu={value.submenu}
            href={value.href}
          />
        );
      })}
    </ul>
  );
};
const PokemonArray = [
  {
    id: 1,
    name: "Charmander",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 2,
    name: "Squirtle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 3,
    name: "Butterfree",
    type: "flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 4,
    name: "Rattata",
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 5,
    name: "Metapod",
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
];

const Pokemon = ({ name, image }) => {
  return (
    <div className="item">
      <img src={image} />
      <p>{name}</p>
    </div>
  );
};
const PokemonList = ({ PokemonArray }) => {
  return PokemonArray.map((value, index) => {
    return <Pokemon key={index} name={value.name} image={value.image} />;
  });
};

function App() {
  return (
    <div>
      <Menu arrayMenu={arrayMenu} />
      <PokemonList PokemonArray={PokemonArray} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
