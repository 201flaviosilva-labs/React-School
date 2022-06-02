import React from "react";
import { shallow } from "enzyme";
import AtomMagicWordIndex from "../index";
import AtomMagicWord from "../AtomMagicWord";


describe("<AtomMagicWordIndex />", () => {
	test("Expect to render correctly", () => {
		const app = shallow(<AtomMagicWordIndex />);
		expect(app).toMatchSnapshot();
	});

	test("Expect to render correctly", () => {
		const app = shallow(<AtomMagicWord />);
		expect(app).toMatchSnapshot();
	});
});
