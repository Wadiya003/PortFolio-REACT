import React, {useState} from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../../Assets/SectionTitle";
export default function About2() {
  const [dropdown, setDropdown] = useState(null);
  const clickHandler = (index) => {
    setDropdown((prev) => {
        return prev === index ? null : index;
    });
    console.log('clicked', index);
};
  return (
    <Container>
      <SectionTitle heading="Certifications" subheading="and Experience!" />
      <main class="grid">
	<section class="card item2">
		<h2>Hover the cards</h2>
	</section>
	<section class="card item3"></section>
	<section class="card item4"></section>
	<section class="card item5">
			<h2>because interactions make it more fun</h2>
	</section>
	<section class="card item7"></section>
	<section class="card item8">
			<h2>animating the shadow on the pseudo element makes it pop out</h2>
	</section>
	<section class="card item9"></section>
	<section class="card item10"></section>
	<section class="card item11">
		<h2>add a :focus state too!</h2>
	</section>
</main>
    </Container>
  );
}
