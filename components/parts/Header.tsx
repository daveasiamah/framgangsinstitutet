import Link from "next/link"
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
  Heading,
} from "@chakra-ui/react"

import { MdMenu, MdClose } from "react-icons/md"

type Props = {
  openSidebar: boolean
  setOpenSidebar: (value: boolean) => void
}

export default function Header({ openSidebar, setOpenSidebar }: Props) {
  const router = useRouter()
  const { pathname, query } = router

  const isSlugPage = !!query.slug

  // CTA modal
  const {
    open: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure()

  const getButtonTitle = (path: string) => {
    switch (path) {
      case "/":
      case "/thank-you":
        return "Bli medlem"
      case "/butiker":
        return "Få din butik"
      case "/annonser":
        return "Få dina annonser"
      default:
        return "Bli medlem"
    }
  }

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
              alt="framgångsinstitutet"
              width={187}
              height={64}
              className="object-cover w-[240px] md:w-[180px] lg:w-[187px] h-auto"
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
          <Link href="/utbildningar">Utbildningar</Link>
          <Link href="/prisplaner">Prisplaner</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/kontakta-oss">Kontakta oss</Link>
          <Link href="/fragor-och-svar">Frågor och svar</Link>
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
                    href="/utbildningar"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Utbildningar
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
                    href="/prisplaner"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Prisplaner
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
                    href="/kontakta-oss"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Kontakta oss
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
                    href="/fragor-och-svar"
                    onClick={() => setOpenSidebar(false)}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Frågor och svar
                  </Link>
                </Box>

                <Button
                  mt="4px"
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
