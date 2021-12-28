import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Card, CardBody, CardImg, CardText } from "reactstrap"
const Profile = () => {
    const { user } = useAuth0()
    return (
        <div>
            <Card>
                <CardImg style={{ width: "100px", margin: "auto" }} src={user.picture} />
                <CardBody>
                    <CardText>
                        User Details
                    </CardText>
                    <table>
                        <tr>
                            <td>first name</td>
                            <td> : </td>
                            <td>{user.given_name}</td>
                        </tr>
                        <tr>
                            <td>family name</td>
                            <td> : </td>
                            <td>{user.family_name}</td>
                        </tr>
                        <tr>
                            <td>Email ID</td>
                            <td> : </td>
                            <td>{user.email}</td>
                        </tr>
                        {/* <tr>
                            <td>Email Verified</td>
                            <td> : </td>
                            <td>{user.email_verified}</td>
                        </tr>
                        <tr>
                            <td>first name</td>
                            <td> : </td>
                            <td>{user.given_name}</td>
                        </tr> */}
                    </table>
                </CardBody>
            </Card>
            {/* {JSON.stringify(user, null, 2)} */}
        </div>
    )
}

export default Profile;