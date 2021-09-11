import React from 'react'
import { Route } from 'react-router-dom'
import HomeSection from '../../components/HomeSection/HomeSection'
import ArticlesSection from '../../components/ArticlesSection/ArticlesSection'
import StaffSection from '../../components/StaffSection/StaffSection'
import ContactsSection from '../../components/ContactsSection/ContactsSection'
import ContactsPage from '../../pages/Contacts/ContactsPage'
import CategoryPage from '../../pages/CategoriesPages/CategoryPage/CategoryPage'

const Main = () => {
    return (
        <>
            <Route path="/" exact component={HomeSection} />
            <Route path="/" exact component={ArticlesSection} />
            <Route path="/" exact component={StaffSection} />
            <Route path="/" exact component={ContactsSection} />
            <Route path="/contacts" exact component={ContactsPage} />
            <Route
                path="/earth"
                exact
                render={() => <CategoryPage categoryName="earth" />}
            />
            <Route
                path="/planet"
                exact
                render={() => <CategoryPage categoryName="planet" />}
            />
            <Route
                path="/science"
                exact
                render={() => <CategoryPage categoryName="science" />}
            />
            <Route
                path="/technology"
                exact
                render={() => <CategoryPage categoryName="technology" />}
            />
            <Route
                path="/universe"
                exact
                render={() => <CategoryPage categoryName="universe" />}
            />
        </>
    )
}

export default Main
