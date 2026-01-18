import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import ContractForm from "../ContractForm"
import { motion, AnimatePresence } from "framer-motion"

import {
  Box,
  Flex,
  Button,
  IconButton,
  Stack,
  useDisclosure,
  Text,
  Image as ChakraImage,
  Heading,
} from "@chakra-ui/react"

import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md"

type Props = {
  openSidebar: boolean
  setOpenSidebar: (value: boolean) => void
}

export default function Header({ openSidebar, setOpenSidebar }: Props) {
  const router = useRouter()
  const { pathname, query } = router

  const isSlugPage = !!query.slug
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  // CTA modal
  const {
    open: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure()

  const setDefaultLangToSV = () => {
    router.push(router.pathname, router.asPath, { locale: "sv" })
  }

  useEffect(() => {
    if (pathname === "/") {
      setDefaultLangToSV()
    }
  }, [pathname])

  const getButtonTitle = (path: string) => {
    switch (path) {
      case "/":
      case "/thank-you":
        return "Ansök till Mentorskap"
      case "/butiker":
        return "Få din butik"
      case "/annonser":
        return "Få dina annonser"
      default:
        return "Ansök till Mentorskap"
    }
  }

  const excludedPaths = ["/annonser", "checkified.se/", "/butiker"]

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={20}
      bg="#FFFFFF"
      height="80px"
    >
      <Flex
        height="100%"
        align="center"
        justify="space-between"
        className="container"
        px={[4, null, 6, 10]}
        mx="auto"
        bg={"white"}
      >
        {/* Logo */}
        <Link href="/">
          <Flex align="center">
            <img
              src="/images/home/logo-main.png"
              alt="checkified"
              width={187}
              height={64}
              className="object-cover w-[120px] md:w-[180px] lg:w-[187px] h-auto"
            />
          </Flex>
        </Link>

        {/* DESKTOP NAV */}
        <Flex
          display={["none", "none", "none", "flex"]}
          gap={8}
          align="center"
          fontWeight={600}
          fontFamily={"poppins"}
        >
          <Link href="/om-oss">Om oss</Link>

          {/* Mega Menu - Custom Implementation */}
          <Box
            position="relative"
            onMouseLeave={() => {
              closeTimerRef.current = setTimeout(() => {
                setIsMenuOpen(false)
              }, 100)
            }}
            onMouseEnter={() => {
              if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
              }
            }}
          >
            <Button
              variant="ghost"
              onMouseEnter={() => setIsMenuOpen(true)}
              onFocus={() => setIsMenuOpen(true)}
            >
              Utbildning
              <MdOutlineKeyboardArrowDown
                style={{
                  marginLeft: "4px",
                  transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Button>
            {isMenuOpen && (
              <Box
                role="menu"
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                top="100%"
                mt={2}
                p={6}
                borderRadius="20px"
                boxShadow="xl"
                bg="white"
                width={["90vw", "500px", "650px"]}
                zIndex={50}
                onMouseEnter={() => {
                  if (closeTimerRef.current) {
                    clearTimeout(closeTimerRef.current)
                  }
                  setIsMenuOpen(true)
                }}
              >
                <Stack gap={4}>
                  <Link
                    href="/dropshipping"
                    style={{ display: "block", width: "100%" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Flex
                      p={2}
                      gap={4}
                      _hover={{ bg: "gray.50" }}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <ChakraImage
                        src="/images/home/graphics/teacher.svg"
                        alt="Dropshipping"
                        boxSize="30px"
                      />
                      <Box>
                        <Text fontWeight="semibold">Dropshipping</Text>
                        <Text fontSize="sm" color="gray.500">
                          Allt du behöver lära dig för lyckas med Dropshipping
                          2026
                        </Text>
                      </Box>
                    </Flex>
                  </Link>

                  <Link
                    href="/e-handel"
                    style={{ display: "block", width: "100%" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Flex
                      p={2}
                      gap={4}
                      _hover={{ bg: "gray.50" }}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <ChakraImage
                        src="/images/home/graphics/note-2.svg"
                        alt="E-handel"
                        boxSize="30px"
                      />
                      <Box>
                        <Text fontWeight="semibold">E-handel</Text>
                        <Text fontSize="sm" color="gray.500">
                          Lär dig driva e-handel lönsamt 2026
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                </Stack>
              </Box>
            )}
          </Box>

          <Link href="/mentorskap">Mentorskap</Link>
          <Link href="/blog">Blogg</Link>
        </Flex>

        {/* DESKTOP CTA BUTTON */}
        <Flex display={["none", "none", "none", "flex"]} align="center">
          {!isSlugPage &&
          pathname !== "/utbildningar" &&
          pathname !== "/ebocker" ? (
            <Button
              color="white"
              bg="#225AEA"
              px={4}
              py={2}
              fontSize="sm"
              fontWeight="semibold"
              className="font-poppins"
              borderRadius="7px"
              _hover={{
                bg: "#1a4aca",
              }}
              onClick={openModal}
            >
              {getButtonTitle(pathname)}
            </Button>
          ) : (
            <Box width="40px" />
          )}
        </Flex>

        {/* MOBILE/TABLET HAMBURGER */}
        <IconButton
          aria-label="Open menu"
          display={["flex", "flex", "flex", "none"]}
          onClick={() => setOpenSidebar(true)}
          bg="#E8F2FF"
          borderRadius="8px"
        >
          <MdMenu color="#2E56F5" size={24} />
        </IconButton>
      </Flex>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {openSidebar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 40,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpenSidebar(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "80%",
                maxWidth: "400px",
                backgroundColor: "white",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                zIndex: 50,
                padding: "24px",
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
            >
              <Flex justify="space-between" align="center" mb={6}>
                <Heading size="3xl" font="jakarta" fontWeight="bold">
                  Meny
                </Heading>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={() => setOpenSidebar(false)}
                >
                  <MdClose />
                </IconButton>
              </Flex>
              <Stack gap={4} align="start">
                <Box
                  px={4}
                  py={2}
                  borderRadius="md"
                  width="100%"
                  _hover={{
                    bg: "#225AEA",
                    color: "white",
                  }}
                  transition="all 0.2s"
                >
                  <Link
                    href="/"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Hem
                  </Link>
                </Box>
                <Box
                  px={4}
                  py={2}
                  borderRadius="md"
                  width="100%"
                  _hover={{
                    bg: "#225AEA",
                    color: "white",
                  }}
                  transition="all 0.2s"
                >
                  <Link
                    href="/om-oss"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Om oss
                  </Link>
                </Box>
                <Box
                  px={4}
                  py={2}
                  borderRadius="md"
                  width="100%"
                  _hover={{
                    bg: "#225AEA",
                    color: "white",
                  }}
                  transition="all 0.2s"
                >
                  <Link
                    href="/dropshipping"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Dropshipping
                  </Link>
                </Box>
                <Box
                  px={4}
                  py={2}
                  borderRadius="md"
                  width="100%"
                  _hover={{
                    bg: "#225AEA",
                    color: "white",
                  }}
                  transition="all 0.2s"
                >
                  <Link
                    href="/e-handel"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    E-handel
                  </Link>
                </Box>
                <Box
                  px={4}
                  py={2}
                  borderRadius="md"
                  width="100%"
                  _hover={{
                    bg: "#225AEA",
                    color: "white",
                  }}
                  transition="all 0.2s"
                >
                  <Link
                    href="/mentorskap"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Mentorskap
                  </Link>
                </Box>
                <Box
                  px={4}
                  py={2}
                  borderRadius="md"
                  width="100%"
                  _hover={{
                    bg: "#225AEA",
                    color: "white",
                  }}
                  transition="all 0.2s"
                >
                  <Link
                    href="/blog"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </Box>

                <Button
                  mt="40px"
                  width="100%"
                  bg="#225AEA"
                  color="white"
                  borderRadius="8px"
                  px={6}
                  py={3}
                  fontWeight="semibold"
                  fontSize="sm"
                  _hover={{
                    bg: "#1a4ab8",
                  }}
                  onClick={() => {
                    setOpenSidebar(false)
                    openModal()
                  }}
                >
                  {getButtonTitle(pathname)}
                </Button>
              </Stack>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CONTRACT FORM MODAL */}
      {isModalOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.300"
          backdropFilter="blur(4px)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={100}
          onClick={closeModal}
        >
          <ContractForm onClose={closeModal} />
        </Box>
      )}
    </Box>
  )
}
