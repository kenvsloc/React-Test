import * as z from "zod";

const Player = z.object({
  username: z.string(),
  xp: z.number()
});

const colors = z.literal(["red", "green", "blue"]);



const UserFrom = () => {
    return (
        <div className=''>
           UserFrom
        </div>
    )
}

export default UserFrom