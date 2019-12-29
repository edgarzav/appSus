export default class Home extends React.Component {

    render() {
        return (
            <section className="home-container">
                <video src="./assets/videos/smoke.mp4" autoPlay muted></video>
                <h1 className="home-title">
                    <span>A</span>
                    <span>P</span>
                    <span>S</span>
                    <span>U</span>
                    <span>S</span>
                </h1>
            </section>
        )
    }
}