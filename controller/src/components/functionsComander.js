import { winErrorSearch, searchProduct } from "./domManipulation"

export function search(name = "none") {
    if (name != "none" && name != "") {
        searchProduct(name)
    } else {
        winErrorSearch()
    }
}