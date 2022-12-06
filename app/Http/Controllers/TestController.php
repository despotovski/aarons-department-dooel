<?php

namespace App\Http\Controllers;

use App\Traits\DataTableUtils;
use App\Http\Requests\TestRequest;
use Yajra\DataTables\Facades\DataTables;

/**
 * This will suppress all the PMD warnings in * this class.
 *
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 * @SuppressWarnings(PHPMD.TooManyMethods)
 */
class TestController extends Controller
{
    use DataTableUtils;

    public function index()
    {
        return inertia('Test/Test', [
            'localVar' => 'Yeaaah'
        ]);
    }

    public function get()
    {
        return DataTables::eloquent(\App\Domain\User\Models\User::query())
            ->filter(function ($query) {
                    $this->filterMultipleColumns($query);
            })
            ->make(true);
    }

    public function store(TestRequest $request)
    {
        return response()->json($request->all());
//        dd($request->all());
    }

    public function publicLayout()
    {
        return inertia('Test/PublicLayoutTest');
    }

    public function layout()
    {
        return inertia('Test/layout/LayoutTest');
    }

    public function listPage()
    {
        return inertia('Test/pages/ListPage');
    }

    public function editItem()
    {
        return inertia('Test/pages/EditItem');
    }

    public function addNewCategory()
    {
        return inertia('Test/pages/AddNewCategory');
    }

    public function authLogin()
    {
        return inertia('Test/pages/AuthLogin');
    }

    public function authCreateAccount()
    {
        return inertia('Test/pages/AuthCreateAccount');
    }

    public function manageCreators()
    {
        return inertia('Test/pages/ManageCreators');
    }

    public function accountValidation()
    {
        return inertia('Test/pages/AccountValidation');
    }
    public function manageProfile()
    {
        return inertia('Test/pages/public/ManageProfile');
    }
    public function creatorsList()
    {
        return inertia('Test/pages/public/CreatorsList');
    }
    public function collectionsList()
    {
        return inertia('Test/pages/public/collections/CollectionsList');
    }
    public function exploreCollections()
    {
        return inertia('Test/pages/public/collections/ExploreCollections');
    }
    public function myCollectionsDetails()
    {
        return inertia('Test/pages/public/collections/MyCollectionsDetails');
    }
    public function myCollections()
    {
        return inertia('Test/pages/public/collections/MyCollections');
    }
    public function homepage()
    {
        return inertia('Test/pages/public/homepage/Homepage');
    }
    public function contactUs()
    {
        return inertia('Test/pages/public/ContactUs');
    }
    public function landingPage()
    {
        return inertia('Test/pages/public/LandingPage');
    }
    public function aboutUs()
    {
        return inertia('Test/pages/public/AboutUs');
    }
    public function faqPage()
    {
        return inertia('Test/pages/public/FaqPage');
    }
}
