<?php

namespace App\Policies;

use App\Post;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(?User $user, Post $post)
    {
        return optional($user)->id === $post->author_id
            ? true
            : $post->published === true;
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Post $post)
    {
        //
    }

    public function delete(User $user, Post $post)
    {
        //
    }

    public function restore(User $user, Post $post)
    {
        //
    }

    public function forceDelete(User $user, Post $post)
    {
        //
    }
}
