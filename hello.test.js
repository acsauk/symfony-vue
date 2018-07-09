import { mount } from "@vue/test-utils";
import Hello from "./assets/js/components/Charges.vue";

describe("Hello component", () => {

    it("renders correctly", () => {
        const comp = mount(Hello);
        expect(comp.html()).toMatchSnapshot();
    });

    it("renders correctly after changing the name state", () => {
        const comp = mount(Hello);
        comp.setData({ name: "Camel" });

        expect(comp.html()).toMatchSnapshot();
    });

    it("renders correctly setting the `greeter` prop", () => {
        const comp = mount(Hello);
        comp.setData({ greeter: 'Joe' });

        expect(comp.html()).toMatchSnapshot();
        expect(comp.data().greeter).toBe("Joe");
    });
});

