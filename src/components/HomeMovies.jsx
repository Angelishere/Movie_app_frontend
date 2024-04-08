import React from 'react'
import MovieHeader from './MovieHeader'

const HomeMovies = () => {
    return (
        <div>
            <MovieHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.wallpaperflare.com/static/89/717/68/rajnikanth-kaala-kaala-karikaalan-tamil-wallpaper.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://wallpapercave.com/wp/wp8807405.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://moviegalleri.net/wp-content/gallery/master-release-posters-hd/Master-Movie-Release-Posters-HD-1e2c7c5.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-bg-dark">
                                    <img src="https://images.unsplash.com/photo-1565688842882-e0b2693d349a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img" alt="..."  style={{ height: '600px' }} />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">VIP CARD</h5>
                                            <p class="card-text">Unlock exclusive perks and rewards by joining our loyalty program for purchasing movies on our site. Enjoy special discounts on tickets, concessions, and merchandise with each purchase. Gain access to early screenings, VIP events, and member-only promotions tailored to your movie preferences. Accumulate points for every transaction and redeem them for free tickets or upgrades. With our loyalty card, enhance your movie-going experience and indulge in a world of entertainment benefits.</p>
                                            <p class="card-text"><small>coming soon..</small></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMovies