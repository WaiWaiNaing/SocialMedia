import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({modalOpened, setModalOpened}){
    const theme = useMantineTheme()
    return (
        <Modal
        overlayColor = {theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]} 
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened = {modalOpened}
        onClose= {()=> setModalOpened(false)}
        >
            <form className="infoForm">
                <h3>Your Info</h3>
                <div>
                    <input type="text" className="infoInput" name="firstName" placeholder="First Name" />
                    <input type="text" className="infoInput" name="lastName" placeholder="Last Name" />
                </div>
                <div>
                    <input type="text" className="infoInput" name="worksAt" placeholder="Works At" />
                </div>
                <div>
                    <input type="text" className="infoInput" name="livesIn" placeholder="Lives In" />
                </div>
                <div>
                    <input type="text" className="infoInput" name="country" placeholder="Country" />
                </div>
                <div>
                    <input type="text" className="infoInput" name="relationship" placeholder="Relationship Status" />
                </div>
                <div>
                    Profile Image
                    <input type="file" name="profileImg" id="" />
                    Cover Image
                    <input type="file" name="coverImg" id="" />
                </div>
                <button className="button infoButton">Update</button>
            </form>
        </Modal>
        
    )
}
export default ProfileModal