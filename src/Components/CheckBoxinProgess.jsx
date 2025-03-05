

const Menu =
    [
        {
            id:1,
            description: "Login button and logout button"},
        {
            id:2,
            description: "Dark mode and Light mode Button with animation"},
        {
            id:3,
            description: "Design a new section of homepage based on the old one"},
        {
            id:4,
            description: "Start making real data for static componnets"},
        {
            id:5,
            description: "Remover all heavy shadow from the old components"},
        {
            id:6,
            description: "Make a scrolling horizontal for card list"},
        {
            id:7,
            description: "Change font size  from 12px-->16px"},
        {
            id:8,
            description: "Add a new notification component at the top of navigation bar "},
        {
            id:9,
            description: "Add a switching languages button at the right-top"},
        {
            id:10,
            description: "Make a new look of our hero section based on the old one"}
]
function Name ({ menu }) {
    return (
        <div className={"flex align-items-center justify-between"}>
            <div>{menu.description}</div>
            <input type={"checkbox"} className={"w-5 h-5 rounded-md"} />
        </div>
    )

}


export default function CheckBoxinProgess () {
    let checkBoxinProgess = false
    return (
        <section className={"space-y-8"}>
            {Menu.map((menu) => (
                <Name key={menu.id} menu={menu} />
            ))}
        </section>

    );

}