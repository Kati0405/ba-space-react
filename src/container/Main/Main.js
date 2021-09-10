import React from 'react'
import { Route } from 'react-router-dom'
import HomeSection from '../../components/HomeSection/HomeSection'
import ArticlesSection from '../../components/ArticlesSection/ArticlesSection'
import StaffSection from '../../components/StaffSection/StaffSection'
import ContactsSection from '../../components/ContactsSection/ContactsSection'
import ContactsPage from '../../pages/Contacts/ContactsPage'
import EarthPage from '../../pages/CategoriesPages/EarthPage/EarthPage'
import PlanetPage from '../../pages/CategoriesPages/PlanetPage/PlanetPage'
import TechnologyPage from '../../pages/CategoriesPages/TechnologyPage/TechnologyPage'
import SciencePage from '../../pages/CategoriesPages/SciencePage/SciencePage'
import UniversePage from '../../pages/CategoriesPages/UniversePage/UniversePage'

const Main = () => {
    return (
        <>
            <Route path="/" exact component={HomeSection} />
            <Route path="/" exact component={ArticlesSection} />
            <Route path="/" exact component={StaffSection} />
            <Route path="/" exact component={ContactsSection} />
            <Route path="/contacts" exact component={ContactsPage} />
            <Route path="/earth" exact component={EarthPage} />
            <Route path="/planet" exact component={PlanetPage} />
            <Route path="/technology" exact component={TechnologyPage} />
            <Route path="/science" exact component={SciencePage} />
            <Route path="/universe" exact component={UniversePage} />
        </>
    )
}

export default Main
