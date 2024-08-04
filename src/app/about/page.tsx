import Image from "next/image";
import "../styles/about.css";
import Subscription from "../components/Subscription";




export default function Home() {
  return (
    <>
    <div className="m-10 p-5">
      <div className="h-9">

      </div>
      <div className="profile"></div>
      <article>
        <header>
          <h1>
            <div className="headline-1">About</div>
            <div className="headline-2">Me</div>
          </h1>
          <p className="subheading">
          Welcome to my safe place where I write about everything I find inspiring and you might find too.
          </p>
        </header>
        <hr />
        <section>
          <p>
            Praesent orci ligula, lacinia eu viverra at, semper id purus. Nulla
            vel condimentum orci. Donec rutrum sed nulla a sollicitudin.
            Curabitur nec nisi libero. Proin justo lorem, dignissim sit amet
            tortor id, sagittis lobortis tellus. Aenean imperdiet ipsum nisl.
            Maecenas egestas eros ut tincidunt pretium. Ut velit nunc, sagittis
            sed cursus et, vestibulum et nunc. Phasellus dignissim metus vitae
            lacinia condimentum. Integer consequat id ex non pellentesque.
            Mauris sit amet sagittis dolor, mollis egestas metus. Vestibulum ac
            varius tortor, eu pretium urna. Integer eu fermentum tellus. Aliquam
            vel auctor quam, eu fermentum metus. Nunc ornare placerat facilisis.
          </p>
         
          <p>
            Donec pellentesque nunc sit amet urna dignissim pretium. Aliquam eu
            mi ut mi dictum consequat nec mollis purus. Curabitur commodo mauris
            erat, sed sodales ligula rutrum in. Suspendisse auctor purus ac quam
            dapibus euismod. Nullam scelerisque orci vitae erat convallis,
            dictum varius nisl rhoncus. Pellentesque gravida enim ut libero
            semper pharetra. Etiam tristique cursus metus euismod bibendum.
            Donec consequat massa et consequat ornare. Integer fringilla tempus
            dignissim.
          </p>
          <blockquote>Spending my free time writing.</blockquote>
          <p>
            Suspendisse ullamcorper pretium risus, vel consequat quam feugiat
            vitae. Etiam ipsum magna, venenatis eget tempor eget, molestie a
            velit. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Maecenas ut risus et magna
            sollicitudin semper at ut dolor. Nulla facilisi. Cras molestie
            tellus nibh, id ultrices turpis volutpat in. Morbi laoreet interdum
            velit ac consequat. Nunc ac nisi quam. Donec volutpat eleifend enim,
            eu ornare sem pharetra sed. Vestibulum euismod ut neque vitae porta.
            Donec lectus nisl, iaculis et aliquam dignissim, viverra sit amet
            enim. Nullam tempus maximus convallis. Suspendisse nec pulvinar
            sapien, eget vestibulum elit.
          </p>
          <p>
            Sed felis odio, commodo nec venenatis congue, euismod in neque.
            Proin ut efficitur mauris. Phasellus dolor sem, consequat eleifend
            vestibulum sed, scelerisque vel tellus. Quisque id ex eget tellus
            ultricies ornare. Cras nec convallis neque. Integer imperdiet, nulla
            sit amet mollis condimentum, ipsum sem placerat massa, ac placerat
            nulla sapien sed sem. Maecenas risus dui, porttitor nec imperdiet
            iaculis, hendrerit sit amet urna. Aliquam elit orci, tempus vitae
            leo ac, consectetur vulputate arcu. Ut sollicitudin felis id ipsum
            gravida finibus. Curabitur eu luctus mauris, nec tempor orci.
            Vivamus egestas massa eget laoreet congue. Phasellus nec nisl quis
            justo tincidunt convallis et quis leo.
          </p>
         
          <p>
            Etiam non felis velit. Curabitur in suscipit ipsum, non convallis
            enim. Maecenas malesuada dapibus magna, eget gravida purus molestie
            a. Nulla ut quam semper lorem feugiat ultricies quis et velit.
            Aliquam elit orci, tempus vitae leo ac, consectetur vulputate arcu.
            Vivamus feugiat ante urna, ac lobortis nisi cursus in.
          </p>
          <p>
            Pellentesque enim mauris, gravida eget placerat lacinia, iaculis id
            diam. Nunc semper libero eget nunc facilisis lobortis.
          </p>
        </section>
      </article>
   
      </div>
    </>
  );
}
