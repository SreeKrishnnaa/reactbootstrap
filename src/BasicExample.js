import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>About Hound Vault</Accordion.Header>
                <Accordion.Body>
                    Welcome to Hound Vault, your trusted companion for storing important files securely online! Sign up today to experience the benefits tailored for college students and business people.

                    Hound Vault ensures the utmost security, preventing any data leakage and giving you peace of mind. Your confidential files are safeguarded with state-of-the-art encryption technology.

                    Features:
                    - **Secure Storage:** Hound Vault provides a secure environment to store your important files, protecting them from unauthorized access.
                    - **User-Friendly:** Our platform is designed with you in mind. It's easy to use, making file management a breeze for both college students and business professionals.
                    - **Tailored for You:** Whether you're a student working on assignments or a business person managing important documents, Hound Vault caters to your unique needs.

                    Sign up now and experience the convenience and security of Hound Vault!
                </Accordion.Body>
            </Accordion.Item>
            {/* Add more Accordion items as needed for additional information */}
        </Accordion>
    );
}

export default BasicExample;
