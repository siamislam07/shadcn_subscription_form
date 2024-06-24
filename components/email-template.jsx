import {
    Body, Container, Head, Heading, Html, Preview, Text
} from "@react-email/components"


export const EmailTemplate = ({ message }) => {
    return (
        <Html>
            <Head>
                <Preview>Blast from the Past - Get Ready for a Retro Ride! 🚀</Preview>
            </Head>
            <Body style={{ backgroundColor: "#0d0d0d", color: "#f5f5f5" }}>
                <Container style={{
                    maxWidth: "600px",
                    margin: "auto",
                    padding: "2rem",
                    border: "2px solid #444",
                    borderRadius: "5px",
                    background: "linear-gradient(135deg, #2e2e2e 25%, #000 100%)"
                }}>
                    <Heading style={{
                        fontSize: "3rem",
                        margin: "1rem 0",
                        fontFamily: "'Courier New', Courier, monospace",
                        textShadow: "1px 1px 2px #000"
                    }}>
                        🎸 Rock On! 🎸
                    </Heading>
                    <Text style={{
                        fontSize: "2rem",
                        margin: "1rem 0 1rem 1rem",
                        fontFamily: "'Courier New', Courier, monospace",
                        textShadow: "1px 1px 2px #000",

                        lineHeight:"1.5"
                    }}>
                        {message}
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}