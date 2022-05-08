import { Spacer, Text, useTheme } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkUi } from "@nextui-org/react";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono"
        width={70}
        height={70}
      />
      <Link href="/" passHref>
        <LinkUi>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </LinkUi>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" passHref>
        <LinkUi>
          <Text color="white" h3>
            Favorites
          </Text>
        </LinkUi>
      </Link>
    </div>
  );
};

export default Navbar;
