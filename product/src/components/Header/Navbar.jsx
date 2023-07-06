import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/Bs";
import PropTypes from "prop-types";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(180, 180, 180, 0.5);
  padding: 10px;
  height: 6rem;
  width: 66rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  color: black;
  font-size: 2.2rem;
  font-weight: 900;
  margin-left: 1.5rem;

  a {
    text-decoration: none;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  li {
    list-style: none;
    margin-right: 1rem;

    a {
      text-decoration: none;
      color: #7e7c7c;
      transition: all 0.2s ease-in-out;
      font-size: 0.9rem;

      &:hover {
        color: black;
      }
    }
  }

  @media screen and (max-width: 760px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 16rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 1.5rem;
`;

const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    display: none;
  }

  :hover {
    border: 2px solid orange;
  }
`;

const MenuIcon = styled.i`
  display: block;
  cursor: pointer;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

//cart

const CartButton = styled.div`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
`;

const CartContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  width: 16rem;
  height: auto;
  background-color: white;
  border-radius: 4%;
  box-shadow: 2px 2px 8px 2px rgb(213, 212, 212);
  position: fixed;
  top: 10%;

`;

const CartTitle = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  border-bottom: 1px solid rgb(143, 143, 143, 0.4);
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.8rem;
`;

const CartImg = styled.img`
  width: 40px;
  height: 40px;
`;

const CartP = styled.p`
  color: rgb(143, 143, 143);
  font-size: 0.7rem;
  font-weight: 400;
`;

const CartPrice = styled.span`
  font-weight: 700;
  color: black;
`;

const CartIcon = styled.p`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const ButtonCheckOut = styled.button`
  margin: 0px 0px 20px 0px;
  gap: 8px;
  padding: 0.8em 6em;
  width: 90%;
  color: white;
  font-weight: 700;
  background-color: hsl(26, 100%, 55%);
  border-color: transparent;
  box-shadow: 0px 10px 5px hsl(25, 100%, 94%, 0.8);
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = ({ counter }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  
  const ref = useRef(null)

  useEffect(() => {
    setTotal(125 * counter);
  }, [counter]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      } 
    }; 
    document.addEventListener('click', handleOutsideClick, true)

    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    <Div>
      <NavbarContainer>
        <Div>
          <LogoContainer>
            <a>sneakers</a>
          </LogoContainer>

          <NavbarList showMenu={showMenu}>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </NavbarList>
        </Div>

        <Div ref={ref}>
          <CartButton onClick={() => setOpen(!open)}>
            <BsCart3 size={20} />
          </CartButton>

          <CartContainer open={open}>
            <CartTitle>Cart</CartTitle>

            {counter === 0 ? (
              <TotalContainer>
                <CartP>Empty</CartP>
              </TotalContainer>
            ) : (
              <div>
                <TotalContainer>
                  <CartImg src="image-product-1.jpg" />
                  <div>
                    <CartP>Fall Limited Edition Sneakers</CartP>
                    <CartP>
                      $125.00 x {counter} <CartPrice>: ${total}</CartPrice>
                    </CartP>
                  </div>
                  <CartIcon>🗑</CartIcon>
                </TotalContainer>
                <TotalContainer>
                  <ButtonCheckOut>Checkout</ButtonCheckOut>
                </TotalContainer>
              </div>
            )}
          </CartContainer>
          <Div>
            <IconContainer
              showMenu={showMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              <Icon>
                <img
                  style={{ width: "2.4rem", height: "2.4rem" }}
                  src="/image-avatar.png"
                />
              </Icon>

              <MenuIcon
                className={showMenu ? "fa fa-times" : "fa fa-bars"}
              ></MenuIcon>
            </IconContainer>
          </Div>
        </Div>
      </NavbarContainer>
    </Div>
  );
};

Navbar.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Navbar;
