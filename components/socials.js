import React from "react";
import { Button, Container, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { FaXTwitter, FaTelegram, FaReddit, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { SiMyanimelist } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const SocialLinks = () => (
    <Container>
        <List
            style={{
                display: "flex",
                flexDirection: { base: "column", md: "row" },
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: { base: "center", md: "space-around" },
                width: "100%",
                margin: "auto"
            }}
        >
            <List style={{ width: { base: "100%", md: "48%" }, margin: "auto" }}>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://github.com/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            p={7}
                            color={useColorModeValue("black", "purple.400")}
                            leftIcon={<FaGithub size={30} />}
                            rounded="2xl"
                            fontSize="1.2rem"
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://x.com/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaXTwitter size={30} />}
                            fontSize="1.2rem"
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://t.me/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            leftIcon={<FaTelegram size={30} />}
                            fontSize="1.2rem"
                            rounded="2xl"
                            p={7}
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://myanimelist.net/profile/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<SiMyanimelist size={30} />}
                            fontSize="1.2rem"
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
            </List>

            <List style={{ width: { base: "100%", md: "48%" }, margin: "auto" }}>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.reddit.com/user/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={8}
                            rounded="2xl"
                            leftIcon={<FaReddit size={30} />}
                            fontSize="1.2rem"
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.linkedin.com/in/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaLinkedinIn size={30} />}
                            fontSize="1.2rem"
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.instagram.com/nezutero" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaInstagram size={30} />}
                            fontSize="1.2rem"
                        >
                            @nezutero
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="mailto:nezutero@gmail.com" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={6}
                            rounded="2xl"
                            leftIcon={<MdOutlineMail size={30} />}
                            fontSize="0.9rem"
                        >
                            nezutero@gmail.com
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </List>
    </Container>
);

export default SocialLinks;
