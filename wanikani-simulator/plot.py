import argparse
import json
import matplotlib.pyplot as plt
import numpy as np


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Plot the results of the WK Simulator")

    parser.add_argument("json_file")

    args = parser.parse_args()

    with open(args.json_file, "r") as infile:
        sim_data = json.load(infile)

    days = np.array(sim_data["day"])
    daily_reviews = np.array(sim_data["review_cnt"])[:-1]
    daily_levels = np.array(sim_data["level"])

    fig, ax1 = plt.subplots()

    # ax1.plot(days, daily_reviews, "g-")
    # ax1.fill_between(days, 0, daily_reviews,
    #                  where=daily_reviews > 0,
    #                  facecolor="b",
    #                  interpolate=True)

    N = 7  # averaging period in days

    avg = np.convolve(daily_reviews,
                      np.ones((N,))/N,
                      mode="full")

    avg_days = np.arange(min(days), max(days)+(2*N-N))

    ax1.plot(avg_days, avg, "b-")

    # ax1.fill_between(avg_days, 0, avg,
    #                  where=avg > 0,
    #                  facecolor="b",
    #                  interpolate=True)

    ax1.set_xlabel("Time (days)")
    ax1.set_ylabel("Daily Reviews")

    ax2 = ax1.twinx()
    ax2.plot(days, daily_levels, "r-", lw=4)

    ax2.grid()
    ax2.set_ylabel("WK Level", color="r")

    ax2.yaxis.set_ticks(np.arange(0, 61, 5))
    ax2.tick_params('y', colors='r')

    # plt.title("3-Day Average Reviews per Day (Twice Daily 8h/20h, 100%)")
    plt.title("Reviews per Day (8h/20h, r=100%/m=100%, 20 les/d)")

    # fig.tight_layout()

    plt.savefig("test.png", dpi=150, bbox_inches="tight")
