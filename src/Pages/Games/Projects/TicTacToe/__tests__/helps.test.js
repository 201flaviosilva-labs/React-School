import { calculateWinner } from "../helps";

describe("Games - TicTacToe - help.js - calculateWinner()", () => {
	it("should return null if the passed array is empty", () => {
		expect(calculateWinner([])).toBeNull();
	});

	it("should return null if all elements in the array are null", () => {
		expect(calculateWinner(Array(9).fill(null))).toBeNull();
	});

	describe("No End - Should return null, if the passed array no winner", () => {
		it("[null, 'X', null, null, null, null, null, null, null]", () => {
			expect(calculateWinner([null, "X", null, "O", null, null, null, null, null])).toBeNull();
		});

		it("['X',null,null,null,null,null,null,null,null]", () => {
			expect(calculateWinner(["X", null, null, null, null, null, null, null, null])).toBeNull();
		});

		it("['X',null,null,null,'O',null,null,null,null]", () => {
			expect(calculateWinner(["X", null, null, null, "O", null, null, null, null])).toBeNull();
		});

		it("['X','X',null,null,'O',null,null,null,null]", () => {
			expect(calculateWinner(["X", "X", null, null, "O", null, null, null, null])).toBeNull();
		});

		it("['X','X','O',null,'O',null,null,null,null]", () => {
			expect(calculateWinner(["X", "X", "O", null, "O", null, null, null, null])).toBeNull();
		});

		it("['X','X','O',null,'O',null,'X',null,null]", () => {
			expect(calculateWinner(["X", "X", "O", null, "O", null, "X", null, null])).toBeNull();
		});

		it("['X','X','O','O','O',null,'X',null,null]", () => {
			expect(calculateWinner(["X", "X", "O", "O", "O", null, "X", null, null])).toBeNull();
		});

		it("['X','X','O','O','O','X','X',null,null]", () => {
			expect(calculateWinner(["X", "X", "O", "O", "O", "X", "X", null, null])).toBeNull();
		});

		it("['X','X','O','O','O','X','X','O',null]", () => {
			expect(calculateWinner(["X", "X", "O", "O", "O", "X", "X", "O", null])).toBeNull();
		});

		it("['X','X','O','O','O','X','X','O','X']", () => {
			expect(calculateWinner(["X", "X", "O", "O", "O", "X", "X", "O", "X"])).toBeNull();
		});
	});

	describe("Win - Should return 'X' or 'O', if the passed array has a Winner", () => {
		it("[0,3,6]", () => {
			expect(calculateWinner(["X", null, null, "X", null, null, "X", null, null])).toBe("X");
			expect(calculateWinner(["O", null, null, "O", null, null, "O", null, null])).toBe("O");
		});

		it("[1,4,7]", () => {
			expect(calculateWinner([null, "X", null, null, "X", null, null, "X", null])).toBe("X");
			expect(calculateWinner([null, "O", null, null, "O", null, null, "O", null])).toBe("O");
		});

		it("[2,5,8]", () => {
			expect(calculateWinner([null, null, "X", null, null, "X", null, null, "X"])).toBe("X");
			expect(calculateWinner([null, null, "O", null, null, "O", null, null, "O"])).toBe("O");
		});

		it("[0,4,8]", () => {
			expect(calculateWinner([null, "X", null, null, "X", null, null, "X", null])).toBe("X");
			expect(calculateWinner([null, "O", null, null, "O", null, null, "O", null])).toBe("O");
		});

		it("[2,4,6]", () => {
			expect(calculateWinner([null, null, "X", null, null, "X", null, null, "X"])).toBe("X");
			expect(calculateWinner([null, null, "O", null, null, "O", null, null, "O"])).toBe("O");
		});

		it("[0,1,2]", () => {
			expect(calculateWinner(["X", "X", "X", null, null, null, null, null, null])).toBe("X");
			expect(calculateWinner(["O", "O", "O", null, null, null, null, null, null])).toBe("O");
		});

		it("[3,4,5]", () => {
			expect(calculateWinner([null, null, null, "X", "X", "X", null, null, null])).toBe("X");
			expect(calculateWinner([null, null, null, "O", "O", "O", null, null, null])).toBe("O");
		});

		it("[6,7,8]", () => {
			expect(calculateWinner([null, null, null, null, null, null, "X", "X", "X"])).toBe("X");
			expect(calculateWinner([null, null, null, null, null, null, "O", "O", "O"])).toBe("O");
		});
	});
});
